import cx from 'classnames';

import Accordion from '@/components/Accordion';

import css from './FrequentlyAskedQuestionPage.module.scss'

const FrequentlyAskedQuestionsPage = ({data}) => {

  return (
    <div>
      <div className={cx('container', css.container)}>
        <h2>Sıkça Sorulan Sorular</h2>
        {data && data.map((item,i) => (
          <Accordion title={item.question} content={item.answer} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionsPage;
