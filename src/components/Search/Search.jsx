const Search = ({ habitats, onSelect }) => {
  return (
    <div className="text-black">
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 rounded-lg"
      >
        <option value="">All habitats</option>
        {habitats.map((habitat, index) => (
          <option key={index} value={habitat}>
            {habitat.charAt(0).toUpperCase() + habitat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search;
