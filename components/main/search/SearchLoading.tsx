import SyncIcon from "@mui/icons-material/Sync";

import { SearchLoadingStyles } from "@/components/index";

const SearchLoading = () => {
  return (
    <div className={SearchLoadingStyles.body}>
      <SyncIcon className={SearchLoadingStyles.icon} />
    </div>
  );
};
export default SearchLoading;
