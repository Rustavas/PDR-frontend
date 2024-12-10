'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectSectionsTests from '../../../components/SelectSectionsTests.jsx';
import TypesOfTests from '../../../components/TypesOfTests.jsx';
import WarningModal from '../../../components/WarningModal.jsx';
import { apiRandomQuestions } from '../../../redux/tests/operations.js';

const RandomQuestionsPage = () => {
  const [selectedSections, setSelectedSections] = useState([]);
  const [allTitles, setAllTitles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSelectedSectionsUpdate = section => {
    setSelectedSections(section);
  };

  const handleButtonSelectedSectionsClick = () => {
    console.log(selectedSections);
    selectedSections.length > 0
      ? dispatch(apiRandomQuestions({ selectedSections, offset: 0, limit: 20 }))
      : setShowModal(true);
  };

  // Функция для выбора всех тем
  const handleButtonAllSectionsClick = () => {
    const allSlugs = allTitles.map(title => title.slag);
    setSelectedSections(allSlugs);
    // console.log("Выбраны все темы:", allSlugs);
  };

  const handleButtonsResetClick = () => {
    setSelectedSections([]);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  // useEffect(() => {
  //   console.log(selectedSections)
  // }, [selectedSections])
  return (
    <div>
      <TypesOfTests />
      {/* <Link href={'tests/random-question/test'}> */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick={handleButtonSelectedSectionsClick}>▶️</button>
        <h3>Виберіть теми та натисніть</h3>
      </div>
      {/* </Link> */}
      <Link href={'tests/random-question/test'}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={handleButtonAllSectionsClick}>▶️</button>
          <h3>Вибрати усі теми</h3>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick={handleButtonsResetClick}>▶️</button>
        <h3>Скидання</h3>
      </div>
      <SelectSectionsTests
        selectedSections={selectedSections}
        onSelectedSectionsUpdate={handleSelectedSectionsUpdate}
        onTitlesLoad={setAllTitles} // передаем функцию для загрузки всех заголовков
      />
      {showModal && (
        <WarningModal
          message="Виберіть хоча б одну тему!"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default RandomQuestionsPage;
