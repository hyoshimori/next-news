import SyncIcon from "@mui/icons-material/Sync";

import { LoadingSpinnerStyles } from "@/components/index";

const LoadingSpinner = () => {
  return (
    <div className={LoadingSpinnerStyles.body}>
      <SyncIcon className={LoadingSpinnerStyles.icon} />
    </div>
  );
};
export default LoadingSpinner;
