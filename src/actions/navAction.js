import { push } from 'connected-react-router'

export const handleNav = (nav) => (dispatch, getState)=>{
  const pathname = getState().router.location.pathname;
  if (pathname === nav) return;
  dispatch(push(nav))
};


