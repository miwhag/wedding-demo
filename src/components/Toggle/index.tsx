/** @format */
import { Switch } from '@mui/material';

export default function Toggle({ toggleActive, onChange }) {
	return (
		<div>
			No
			<Switch
				checked={toggleActive}
				onChange={onChange}
				sx={{
					'& .MuiSwitch-thumb': {
						boxShadow: '0px 0px 2px 1px #C0C0C0',
					},
				}}
			/>
			Yes
		</div>
	);
}
