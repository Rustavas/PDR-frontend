'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectTitlesOfSectionsTests } from '../redux/tests/selectors.js';
import { apiTitlesOfSectionsTests } from '../redux/tests/operations.js';

const SelectSectionsTests = ({
  selectedSections,
  onSelectedSectionsUpdate,
  onTitlesLoad,
}) => {
  const dispatch = useDispatch();
  const titles = useSelector(selectTitlesOfSectionsTests);
  const [localSelectedSections, setLocalSelectedSections] =
    useState(selectedSections);

  useEffect(() => {
    dispatch(apiTitlesOfSectionsTests());
  }, [dispatch]);

  useEffect(() => {
    setLocalSelectedSections(selectedSections);
    // console.log(localSelectedSections);
  }, [selectedSections]);

  useEffect(() => {
    if (titles.length) {
      onTitlesLoad(titles); // Загружаем все titles в RandomQuestionsPage
    }
  }, [titles, onTitlesLoad]);

  const handleCheckboxChange = slug => {
    const updatedSelection = localSelectedSections.includes(slug)
      ? localSelectedSections.filter(item => item !== slug)
      : [...localSelectedSections, slug];

    setLocalSelectedSections(updatedSelection);
    onSelectedSectionsUpdate(updatedSelection);
  };

  return (
    <div>
      <ul>
        {Array.isArray(titles) &&
          titles.map(title => (
            <li key={title.slag}>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input
                  type="checkbox"
                  checked={
                    Array.isArray(localSelectedSections) &&
                    localSelectedSections.includes(title.slag)
                  }
                  onChange={() => handleCheckboxChange(title.slag)}
                />
                <h3>{title.title}</h3>
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectSectionsTests;
