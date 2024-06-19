// 이전 state,action 객체( 어떤걸 할지 정의한 JS객체 ) --> return 다음 state 반환

// Reducer함수는 순수해야함 ( reducer함수는 렌더링 중에 실행됨 )
// 요청을 보내거나, timeout을 스케쥴링하거나 사이드 이펙트(컴포넌트 외부에 영향을 미치는 작업)을 수행해서는 안 됩니다.
// reducer는 objects와 arrays을 변이 없이 업데이트해야 합니다.
export function formReducer(state, action) {
  switch (action.type) {
    case "id":
      return { ...state, id: action.payload };
    case "pw":
      return { ...state, pw: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "reset":
      return { ...state, id: "", pw: "", email: "" };
    default:
      return state;
  }
}
