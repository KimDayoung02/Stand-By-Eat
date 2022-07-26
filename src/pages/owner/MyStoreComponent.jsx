import axios from 'axios';
import { useEffect, useState } from 'react';
//

function MyStoreComponent() {
  const [storeList, setStoreList] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/stores')
      .then((res) => setStoreList(res.data));
  }, []);

  return (
    <div className="myStore-container">
      <h3>가게 목록</h3>
      <div>
        <MyStoreData storeList={storeList} />
      </div>
    </div>
  );
}

function MyStoreData({ storeList }) {
  console.log(storeList);

  return (
    <div className="storesList-container">
      <h5>등록된 가게 리스트</h5>
      {storeList.map((e) => {
        return (
          <div className="storeList-container">
            <div className="store-img-compont">
              <img src={e.picture[0]} style={{ width: '40%' }} />
            </div>
            <div className="store-info-component">
              <div>{e.storeName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MyStoreComponent;
