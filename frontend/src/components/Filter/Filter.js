import { useDispatch, useSelector } from 'react-redux';
import { setTitleFilter, resetFilters, selectTitleFilter } from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const disptch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handleTitleFilterChange = (e) => {
    disptch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    disptch(resetFilters());
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input 
            type="text" 
            value={titleFilter}
            placeholder="Filter by title..." 
            onChange={handleTitleFilterChange} 
          />
        </div>
        <button type="button" onClick={handleResetFilters}>Reser Filters</button>
      </div>
    </div>
  )
}

export default Filter;