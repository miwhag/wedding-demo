/** @format */

import mockGuestsData from "../../data/mockGuests.json";
import mockLodgingsData from "../../data/mockLodgings.json";

export const steps = {
  start: "START",
  verify: "VERIFY",
  contact: "CONTACT",
  cabin: "CABIN",
  confirm: "CONFIRM",
  additional: "ADDITIONAL",
};

// Initialize localStorage with mock guests if not already present
function initializeMockData() {
  const storedGuests = localStorage.getItem("weddingGuests");

  // Force refresh if the data structure is outdated (no 'id' field)
  if (!storedGuests) {
    localStorage.setItem("weddingGuests", JSON.stringify(mockGuestsData));
  } else {
    try {
      const guests = JSON.parse(storedGuests);
      // Check if data structure needs update (missing 'id' field)
      if (guests.length > 0 && !guests[0].hasOwnProperty("id")) {
        localStorage.setItem("weddingGuests", JSON.stringify(mockGuestsData));
      }
    } catch (err) {
      localStorage.setItem("weddingGuests", JSON.stringify(mockGuestsData));
    }
  }
}

// Get guests from localStorage
export async function getGuests() {
  try {
    initializeMockData();
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return guests;
  } catch (err) {
    console.log(err);
    return [];
  }
}

// Get selected guest by ID from localStorage
export async function getSelectedGuest(id) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    const guest = guests.find((g) => g.guest_id === id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return guest || null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function sendGuestEmail(id) {
  try {
    // Mock email sending - just log for demo
    console.log(`Email would be sent to guest ${id}`);
    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getLodgings() {
  try {
    // Initialize lodgings in localStorage if not present
    if (!localStorage.getItem("weddingLodgings")) {
      localStorage.setItem("weddingLodgings", JSON.stringify(mockLodgingsData));
    }

    const lodgingsJson = localStorage.getItem("weddingLodgings");
    const lodgings = lodgingsJson ? JSON.parse(lodgingsJson) : [];
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return lodgings;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export async function getSelectedLodge(id) {
  try {
    const lodgingsJson = localStorage.getItem("weddingLodgings");
    const lodgings = lodgingsJson ? JSON.parse(lodgingsJson) : [];
    const lodging = lodgings.find((l) => l.id === id);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return lodging || null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function updateGuest(id, body) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    const guestIndex = guests.findIndex((g) => g.guest_id === id);

    if (guestIndex !== -1) {
      const oldLodgingId = guests[guestIndex].lodging_id;
      const newLodgingId = body.lodging_id;

      // Update the guest with new data
      guests[guestIndex] = { ...guests[guestIndex], ...body };
      localStorage.setItem("weddingGuests", JSON.stringify(guests));

      // If lodging_id changed, update cabin occupants
      if (oldLodgingId !== newLodgingId && newLodgingId !== undefined) {
        await updateCabinOccupants(
          guests[guestIndex],
          oldLodgingId,
          newLodgingId,
        );
      }
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function updateCabinOccupants(guest, oldLodgingId, newLodgingId) {
  const lodgingsJson = localStorage.getItem("weddingLodgings");
  const lodgings = lodgingsJson ? JSON.parse(lodgingsJson) : [];

  // Calculate total party size
  const guestName = guest.full_name || guest.name;
  const partyMembers = [guestName];

  // Add plus ones
  if (guest.plus_ones && guest.plus_ones.length > 0) {
    guest.plus_ones.forEach((plusOne) => {
      if (plusOne.name) {
        partyMembers.push(plusOne.name);
      }
    });
  }

  // Add kids who need beds
  if (guest.kids && guest.kids.length > 0) {
    guest.kids.forEach((kid) => {
      if (kid.name && kid.needs_bed !== "no") {
        partyMembers.push(kid.name);
      }
    });
  }

  const partySize = partyMembers.length;

  // Remove entire party from old cabin if they had one
  if (oldLodgingId !== null && oldLodgingId !== undefined) {
    const oldCabinIndex = lodgings.findIndex((l) => l.id === oldLodgingId);
    if (oldCabinIndex !== -1) {
      // Remove all party members
      partyMembers.forEach(() => {
        const memberIndex = lodgings[oldCabinIndex].occupants.findIndex(
          (occupant) => partyMembers.includes(occupant),
        );
        if (memberIndex !== -1) {
          lodgings[oldCabinIndex].occupants.splice(memberIndex, 1);
        }
      });
      // Add back "Spot Available" for each removed member
      for (let i = 0; i < partySize; i++) {
        lodgings[oldCabinIndex].occupants.push("Spot Available");
      }
      lodgings[oldCabinIndex].spots_remaining += partySize;
    }
  }

  // Add entire party to new cabin
  if (newLodgingId !== null && newLodgingId !== 24) {
    const newCabinIndex = lodgings.findIndex((l) => l.id === newLodgingId);
    if (newCabinIndex !== -1) {
      // Check if cabin has enough capacity
      if (lodgings[newCabinIndex].spots_remaining >= partySize) {
        // Add all party members
        partyMembers.forEach((member) => {
          const spotIndex =
            lodgings[newCabinIndex].occupants.indexOf("Spot Available");
          if (spotIndex !== -1) {
            lodgings[newCabinIndex].occupants[spotIndex] = member;
          }
        });
        lodgings[newCabinIndex].spots_remaining -= partySize;
      }
    }
  }

  localStorage.setItem("weddingLodgings", JSON.stringify(lodgings));
}

export async function createPlusOne(body) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    const guestIndex = guests.findIndex(
      (g) => g.guest_id === body.guest_id || g.id === body.guest_id,
    );

    if (guestIndex !== -1) {
      // Add plus one with a unique ID
      const newPlusOne = {
        id: Date.now(),
        name: body.name || "",
        email: body.email || "",
        guest_id: body.guest_id,
      };
      guests[guestIndex].plus_ones.push(newPlusOne);
      localStorage.setItem("weddingGuests", JSON.stringify(guests));
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updatePlusOne(plus_one_id, body) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];

    // Find the guest with this plus one
    for (let guest of guests) {
      const plusOneIndex = guest.plus_ones.findIndex(
        (p) => p.id === plus_one_id,
      );
      if (plusOneIndex !== -1) {
        guest.plus_ones[plusOneIndex] = {
          ...guest.plus_ones[plusOneIndex],
          ...body,
        };
        localStorage.setItem("weddingGuests", JSON.stringify(guests));
        break;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function deletePlusOne(plus_one_id) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];

    // Find and remove the plus one
    for (let guest of guests) {
      const plusOneIndex = guest.plus_ones.findIndex(
        (p) => p.id === plus_one_id,
      );
      if (plusOneIndex !== -1) {
        guest.plus_ones.splice(plusOneIndex, 1);
        localStorage.setItem("weddingGuests", JSON.stringify(guests));
        break;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function setKids(id, body) {
  try {
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    const guestIndex = guests.findIndex((g) => g.guest_id === id);

    if (guestIndex !== -1) {
      guests[guestIndex].kids = body.kids || [];
      // Save the child_care value to each kid in the array
      if (body.child_care && guests[guestIndex].kids.length > 0) {
        guests[guestIndex].kids = guests[guestIndex].kids.map((kid) => ({
          ...kid,
          child_care: body.child_care,
        }));
      }
      localStorage.setItem("weddingGuests", JSON.stringify(guests));
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateDodgeball(body) {
  try {
    // Mock dodgeball registration - store in separate localStorage key
    const dodgeballJson = localStorage.getItem("dodgeballRegistrations");
    const registrations = dodgeballJson ? JSON.parse(dodgeballJson) : [];
    registrations.push(body);
    localStorage.setItem(
      "dodgeballRegistrations",
      JSON.stringify(registrations),
    );

    await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
