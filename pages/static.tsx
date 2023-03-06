import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const Static = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  },[])
  return (
    <div>
      {hydrated && <div>
        <h1>여기는 정적 페이지 입니다.</h1>
        <p>이름: {faker.name.fullName()}</p>
        <p>사는 곳: {faker.address.cityName()}</p>
        <p>핸드폰 번호: {faker.phone.number()}</p>
        <p>좋아하는 노래: {faker.music.songName()}</p>
      </div>}
    </div>
  );
}

export default Static;
