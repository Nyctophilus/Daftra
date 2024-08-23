import ToggleSwitch from "./ui/toggle-switch";

const AlertBanner = () => {
  return (
    <div className="p-4 bg-green-600 text-white rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">UI Designer in Egypt</h3>
          <p>70 job positions</p>
        </div>

        <div className="flex items-center gap-x-2">
          <p>Set alert</p>

          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};
export default AlertBanner;
