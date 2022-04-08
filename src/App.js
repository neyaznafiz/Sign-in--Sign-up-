import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import { auth } from './firebase-init/firebase.init';


function App() {

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // google signup
  const googleSignup = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      });
  }


  // github signup
  const githubSignup = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      });
  }


  // facebook signup
  const facebookSignup = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      });
  }

  // twitter signup
  const twitterSignup = () => {

  }

  //  handle email
  const handleEmail = event => {
    const emailInput = event.target.value
    setEmail(emailInput)
    console.log(emailInput);
  }

  // handle password
  const handlePassword = event => {
    const passwordlInput = event.target.value
    setPassword(passwordlInput)
    console.log(passwordlInput);
  }

  // signout
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {!user.uid ?
        <>
          <div className='my-20 mx-44 py-10 border rounded'>
            <form action="">

              <h2 className='text-xl text-gray-700 font-semibold border-b-2 border-gray-700 mx-14 pb-1 mb-10'>Please Register</h2>

              <div className='mt-4'>
                <input type="email" name="" id="" placeholder='Type your email' className='border border-black px-2 rounded-md' onBlur={handleEmail} />
              </div>
              <div className='my-12'>
                <input type="password" name="" id="" placeholder='Input your password' className='border border-black px-2 rounded-md' onBlur={handlePassword} />
              </div>

              <button className='bg-black text-white px-4 py-1 rounded-md hover:bg-gray-400 hover:text-black'>SignUp</button>

            </form>

            <div>
              <button onClick={googleSignup} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black' >Continue with google</button>

              <button onClick={githubSignup} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black' >Continue with Github</button>

              <button onClick={facebookSignup} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black' >Continue with Facebook</button>
              <br />
              <button onClick={twitterSignup} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black' >Continue with Twitter</button>
            </div>
          </div>
        </>
        :
        <div className='mt-7 border rounded p-5'>
          <img className='mx-auto' src={user.photoURL} alt="" />
          <h2>Name : {user.displayName}</h2>
          <p>E-mail : {user.email}</p>

          <button onClick={handleSignout} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black' >Sign Out</button>
        </div>
      }


    </div>
  );
}

export default App;
