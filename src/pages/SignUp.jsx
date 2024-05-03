import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const {creatUser} =useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault();

        const form =e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(name,email,password)

        creatUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center lg:text-left w-1/2">
               <img src={img} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <p className='font-bold text-4xl text-center py-3'>Sign up</p>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"   name="email"  placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  name="password"  placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">sign up</button>
                    </div>
                    <p>Have an account ? please : <Link className='text-orange-500 font-bold' to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;