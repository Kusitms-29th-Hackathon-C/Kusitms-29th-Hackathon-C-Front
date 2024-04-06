import React, { useEffect, useState } from 'react';
import topic1 from '../../assets/images/Exercise1.png';
import topic2 from '../../assets/images/Exercise2.png';
import topic3 from '../../assets/images/Exercise3.png';
import check1 from '../../assets/images/check1.png';
import check2 from '../../assets/images/check2.png';
import check3 from '../../assets/images/check3.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import styles from './Exercise.module.scss';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/common/footer/Footer';
import { getWritingList } from '../../apis/writingApi';

interface listType {
  writingId: number;
  keyword: string;
  complete: boolean;
}

const Exercise = () => {
  const [data, setData] = useState<listType[]>();

  const checkedList = [check1, check2, check3];
  const navigate = useNavigate();

  const fetchWritings = async () => {
    try {
      const data = await getWritingList();
      setData(data);
    } catch (error) {
      console.error('Error fetching writings:', error);
    }
  };

  useEffect(() => {
    fetchWritings();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>오늘의 요약 훈련</div>
        <img src={topic1} />
        <div className={styles.exerciseList}>
          {data &&
            data.map((item, index) => (
              <div className={styles.exercise}>
                {item.complete ? (
                  <img src={checkedIcon} />
                ) : (
                  <img src={checkedList[index]} />
                )}
                <div>{item.keyword}</div>
              </div>
            ))}
        </div>
        <img src={topic2} />
        <div className={styles.exerciseList}>
          {data?.map((item, index) => (
            <div className={styles.exercise}>
              {item.complete ? (
                <img src={checkedIcon} />
              ) : (
                <img src={checkedList[index]} />
              )}
              <div>{item.keyword}</div>
            </div>
          ))}
        </div>
        <img src={topic3} />
        <div className={styles.exerciseList}>
          {data?.map((item, index) => (
            <div className={styles.exercise} onClick={() => navigate('/write')}>
              {item.complete ? (
                <img src={checkedIcon} />
              ) : (
                <img src={checkedList[index]} />
              )}
              <div>{item.keyword}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exercise;
