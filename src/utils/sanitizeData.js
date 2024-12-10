import DOMPurify from 'dompurify';
import { IMAGE_BASE_URL } from '../constants/constants.js';

const imageFields = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

const addSanitizedImages = item => {
  const images = {};
  imageFields.forEach(field => {
    images[`${field}src`] = item[field] || '';
  });
  return images;
};

export const sanitizeContent = section => {
  return section && Array.isArray(section.content)
    ? section.content.map(item => ({
        number: item.number,
        text: DOMPurify.sanitize(item.text),
        ...addSanitizedImages(item), // Добавляем изображения к каждому объекту
      }))
    : [];
};

export const sanitizeSigns = section => {
  return section && Array.isArray(section.signs)
    ? section.signs.map(sign => ({
        ...sign,
        content: DOMPurify.sanitize(
          sign.content.replace(
            /href="([^"]+)"/g,
            `href="${IMAGE_BASE_URL}/$1"`,
          ),
        ),
        ...addSanitizedImages(sign),
      }))
    : [];
};

export const sanitizeAllSigns = section => {
  return section && Array.isArray(section.allSigns)
    ? section.allSigns.map(subSection => ({
        ...subSection,
        signs: Array.isArray(subSection.signs)
          ? subSection.signs.map(sign => ({
              ...sign,
              content: DOMPurify.sanitize(
                sign.content.replace(
                  /href="([^"]+)"/g,
                  `href="${IMAGE_BASE_URL}/$1"`,
                ),
              ),
              ...addSanitizedImages(sign),
            }))
          : [],
      }))
    : [];
};

export const sanitizeModalData = data => {
  if (data && typeof data === 'object') {
    const baseContent = {
      number: data.number,
      content: data.content
        ? DOMPurify.sanitize(
            data.content.replace(
              /href="([^"]+)"/g,
              `href="${IMAGE_BASE_URL}/$1"`,
            ),
          )
        : undefined,
      text: data.text
        ? DOMPurify.sanitize(
            data.text.replace(/href="([^"]+)"/g, `href="${IMAGE_BASE_URL}/$1"`),
          )
        : undefined,
      id: data.id || '',
      src: data.src || '',
      alt: data.alt || '',
      title: data.title || '',
    };
    return {
      ...baseContent,
      ...addSanitizedImages(data),
    };
  }
  return null;
};
