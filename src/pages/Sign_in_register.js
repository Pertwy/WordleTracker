import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import { createUser } from '../graphql/mutations';

export default function Sign_in_register() {

    function CreateNewUser(user){
        // await API.graphql(graphqlOperation(createUser, {input:data}))
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err))
        console.log(user)
    }

    const services = {
        
        async handleSignIn(formData) {

            let { username, password } = formData;

            try {
                const user = await Auth.signIn({
                    username,
                    password
                });
                CreateNewUser(user);
                return user;
            } catch (error) {
                console.log('error signing up:', error);
            }
        },
      };


    return (
        <div>
            <Authenticator services={services} signUpAttributes={['nickname']} >
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    )
}
