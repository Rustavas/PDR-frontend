'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import TitlesOfSectionsRules from '../../../components/TitlesOfSectionsRules.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiSectionOfRules,
  apiModalPointOfRules,
} from '../../../redux/rules/operations.js';
import {
  selectSectionOfRules,
  selectPointOfRules,
} from '../../../redux/rules/selectors.js';
import Modal from '../../../components/Modal.jsx';
// import { IMAGE_BASE_URL } from '../../../../constants/constants.js';
import {
  sanitizeContent,
  sanitizeSigns,
  sanitizeAllSigns,
  sanitizeModalData,
} from '../../../../utils/sanitizeData.js';
import RulesList from '../../../components/RulesList.jsx';
import SignsList from '../../../components/SignsList.jsx';
import AllSignsList from '../../../components/AllSignsList.jsx';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalRequested, setIsModalRequested] = useState(false);
  const dispatch = useDispatch();
  const { sectionSlag } = useParams();
  const section = useSelector(selectSectionOfRules);
  const modalData = useSelector(selectPointOfRules);
  const safeContent = sanitizeContent(section);
  const safeSigns = sanitizeSigns(section);
  const safeAllSigns = sanitizeAllSigns(section);
  const safeModalData = sanitizeModalData(modalData);

  useEffect(() => {
    dispatch(apiSectionOfRules(sectionSlag)).then(() => setLoading(false));
  }, [dispatch, sectionSlag]);

  // useEffect для автоматического открытия модалки после загрузки данных
  useEffect(() => {
    if (isModalRequested && modalData && Object.keys(modalData).length > 0) {
      setIsOpen(true);
      setIsModalRequested(false); // Сбрасываем после открытия модалки
    }
  }, [modalData, isModalRequested]);

  const handleOpenModal = useCallback(
    (sectionSlag, number) => {
      setIsModalRequested(true);
      dispatch(apiModalPointOfRules({ sectionSlag, number }));
    },
    [dispatch],
  );

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleButtonClick = e => {
      const button = e.target.closest('button[data-slag][data-number]');
      if (button) {
        const sectionSlag = button.getAttribute('data-slag');
        const number = button.getAttribute('data-number');
        handleOpenModal(sectionSlag, number);
      }
    };

    document.addEventListener('click', handleButtonClick);

    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <TitlesOfSectionsRules />
      </div>
      <div style={{ flex: 3 }}>
        {loading ? (
          <p>Загрузка...</p>
        ) : section ? (
          <div>
            <h1>{section.title}</h1>
            {safeContent.length > 0 ? (
              <RulesList data={safeContent} />
            ) : safeSigns.length > 0 ? (
              <SignsList signs={safeSigns} />
            ) : safeAllSigns.length > 0 ? (
              <AllSignsList allSigns={safeAllSigns} />
            ) : (
              <p>Нет данных для отображения.</p>
            )}
          </div>
        ) : (
          <p>Розділ не знайдено</p>
        )}
      </div>
      {/* Модальное окно */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} data={safeModalData} />
    </div>
  );
}
