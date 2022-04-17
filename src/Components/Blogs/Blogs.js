import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='mt-3'>QnA</h1>
            <div>
                <h1>Difference between authorization and authentication</h1>
                <p className='text-white'>If we want to put this simply,Authentication is verifying a person/user is actually that person/user who is supposed to take that service.Means if i have a facebook account i have to prove to facebook that i have a account at their website and i am that person/user.Whereas authorization comes after authentication.If we look the example of facebook we can easily understand it.After authentication at facebook that i am actually that person in facebook there are many services as example group moderation.If i am in a group and i want to moderate that group i have to have permission which we say authorization.</p>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-white'>Firebase is like a libray for authentication and other development work for web ,mobile.Authentication is a long process if anyone want to do it from strach and and there is also security issue.So as google firebase is backed by a huge developes at google i use it for safety and ease for authentication.
                 Alternative for authentication are-Auth0,Passport,MongoDB,Amazon Cognito etc.   
                </p>
                </div>

            <div>
                <h1>What other services does firebase provide other than authentication</h1>
                <p className="text-white">
                    Firebase provide services other than authentication.Like Hosting,you can host you website in firebase. It also provides realtime database as a service.And Test lab where you can test you application throughly.We know that sending notification is a hassle with code as it needs extra maintainence.Firebase also have a service to send notification.
                </p>
            </div>
        </div>
    );
};

export default Blogs;