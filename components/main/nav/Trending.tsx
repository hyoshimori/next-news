import { Search, TrendingStyles } from "@/components/index";

const Trending = () => {
  return (
    <div className={TrendingStyles.body}>
      <p style={{ color: "#FEC005" }}>Trending</p>
      <Search />
    </div>
  );
};
export default Trending;
