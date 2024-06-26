import React from 'react';
import styles from './Imagination.module.scss';
import topSection from '../../assets/images/Imagination1.png';
import post1 from '../../assets/images/Imagination2.png';
import post2 from '../../assets/images/Imagination3.png';
import rankingSection from '../../assets/images/Imagination4.png';
import Label from '../../components/common/label/Label';
import Footer from '../../components/common/footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { TodayRank } from '../../assets/images';

const Imagination = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tags = ['동전', '비누', '감기약'];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>상상력 글쓰기</div>
          <img
            src={topSection}
            onClick={() => navigate('/imagination/write')}
          />
          {/* <div className={styles.PostList}>
      <div className={styles.postItem}>
        <div className={styles.itemTitle}></div>
      </div>
    </div> */}
          <img src={post1} />
          <img src={post2} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>오늘의 상상력 Top 20</div>
          <div className={styles.tagList}>
            {tags.map((item) => (
              <Label type='10' content={item} paddingH={4} paddingV={16} />
            ))}
          </div>
          {location.state === true ? (
            <div onClick={() => navigate('/imagination/result')}>
              <TodayRank />
            </div>
          ) : (
            <img src={rankingSection} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Imagination;
