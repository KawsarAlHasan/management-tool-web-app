import React from 'react';
import googleImg from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading';

const SocialLogin = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    let erroElement;

    if (loading) {
        return <Loading />
    }

    if (error) {
        erroElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                <div class="divider">OR</div>
                {erroElement}
                <div class="grid h-20 card rounded-box place-items-center">
                    <button onClick={() => signInWithGoogle()} class="btn btn-info">
                        <img style={{ width: '50px' }} className='img-fluid px-2' src={googleImg} alt="" />
                        Google Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;