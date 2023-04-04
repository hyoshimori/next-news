import SyncIcon from '@mui/icons-material/Sync';

import styles from './SearchLoading.module.css';
import Search from './Search'

const SearchLoading = () => {

  return (
  <div className={styles.body}>
    <SyncIcon className={styles.icon} />
  </div>
  )
}
export default SearchLoading
