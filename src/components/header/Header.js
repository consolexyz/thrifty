import React, { Fragment } from 'react';
import { useContext } from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import CartIcon from "../cart-icon/CartIcon";
import { signOutUser } from '../../firebase/firebase.utils';
 import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

 const Header = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };


  return(
    <Fragment>
    <div className='header'>
        <Link to = "/" className ="logo-container" >
            <Logo className ="logo" />
            </Link>
            <div className=' options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                   CONTACT 
                </Link>
                {
                  currentUser ? (
                  <div className='option' onClick={signOutHandler}>SIGN OUT</div>
                  )
                  : (
                  <Link className='option' to ='/signin'>
                  SIGN IN
                  </Link>
                  )
                }
                <CartIcon />
            </div>
             
               <CartDropdown />
    </div>
    </Fragment>
  )
          }
export default Header;