import styles from './Search.module.css';
import { Input } from "@mui/material";
import { useState } from 'react';
import * as InputType from "@/types/input";

const Search = () => {

  const [input, setInput] = useState<InputType.Input | undefined>(undefined);

  return (
  <div className={styles.body}>
    <Input className={styles.input}
        type="text"
        placeholder='Input messages'
        onChange={(e) => setInput(e.target.value)}
        value={}
        />
  </div>
  )
}

export default Search
