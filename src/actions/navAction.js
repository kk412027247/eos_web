import { push } from 'connected-react-router'

export const handleNav = (nav) => (dispatch)=>{
  dispatch(push(nav))
};
