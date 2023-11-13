// 이미지는 import해서 불러올 수 있음
import E404 from '../../images/errors/404.gif'; // 이미지 가져옴

const NotFound = () => {
  return (
    <>
      <img src={E404} alt="error 414" />
      <h1>페이지없음</h1>;
    </>
  );
};

export default NotFound;
