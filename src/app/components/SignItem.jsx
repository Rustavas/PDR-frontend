import Image from 'next/image.js';
import { IMAGE_BASE_URL } from '../../constants/constants.js';

const SignItem = ({ sign }) => {
  // Определяем ключи для дополнительных изображений
  const imageKeys = [
    'img1src',
    'img2src',
    'img3src',
    'img4src',
    'img5src',
    'img6src',
    'img7src',
  ];

  return (
    <div key={sign.id} style={{ marginBottom: '20px' }}>
      <Image
        src={`${IMAGE_BASE_URL}${sign.src}`}
        alt={sign.alt}
        width={200}
        height={200}
        style={{
          maxWidth: '200px',
          maxHeight: '200px',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
      <h3>{sign.title}</h3>
      <p data-id={sign.id} dangerouslySetInnerHTML={{ __html: sign.content }} />

      {/* Рендерим дополнительные изображения, если они есть */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginTop: '10px',
        }}
      >
        {imageKeys.map((key, index) =>
          sign[key] ? (
            <Image
              key={index}
              src={`${IMAGE_BASE_URL}${sign[key]}`}
              alt={`Additional image ${index + 1}`}
              width={800}
              height={800}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default SignItem;
