import { Switch, FormControlLabel, Button } from "@mui/material";
import { padding } from "@mui/system";

const settings = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Settings</h2>
        <h2>Welcome Back, Daniel</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-atuo p-4 border rounded-lg bg-white overflow-y-auto">
          <h1 className="font-bold text-4xl flex items-center justify-center">
            Settings
          </h1>
          <div className="text-center">
            <ul className="mt-5">
              <li className="flex justify-between m-10 ">
                <h2>Allow notifications</h2>
                <FormControlLabel control={<Switch />} />
              </li>
              <li className="flex justify-between m-10 mx-10">
                <h2>Allow browswer to track my data</h2>
                <FormControlLabel control={<Switch />} />
              </li>
              <li className="flex justify-between m-10 mx-10">
                <h2>Change background mode </h2>
                <FormControlLabel control={<Switch />} />
              </li>
              <li className="flex justify-between m-10 mx-10">
                <h2>Mute all sounds incoming</h2>
                <FormControlLabel control={<Switch />} />
              </li>
              <li className="flex justify-between m-10 mx-10">
                <h2>Currency ($)</h2>
                <FormControlLabel control={<Switch />} />
              </li>
              <Button variant="outlined">Logout?</Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settings;
