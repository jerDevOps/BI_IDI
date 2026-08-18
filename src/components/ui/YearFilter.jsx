export default function YearFilter({ years, activeYear, onChange }) {
  return (
    <div className="filter-bar">
      {years.map(year => (
        <button
          key={year}
          className={`year-btn ${activeYear === year ? 'active' : ''}`}
          onClick={() => onChange(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
