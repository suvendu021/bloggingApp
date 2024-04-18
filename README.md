
# Blog App Structure

- header
  - logo
  - menu btn
    - sign out btn
- body

  - signIn/ signUp page
  - if sign in redirect to home page
  - store access token in cookie for authenticate user
  - store user name at redux store
  - create blog button redirect to create blog page
  - form asking for title, description, upload img
  - after upload redirect to home page and can see the blog and its author
  - only author can update and delete his/her blog

- footer

# Blog Bro !!!

- create frontend and backend folder
- signIn form, validate username, email, password at front-end
- store created user info in mongoDB
- authentcate user using jwt
- create REST api for user management
- express use for creating middleware as well as routing
- creating schema for user and blog using nongoose which is a object data modeling library for connecting mongoDB and node
- write controller for user sign up, sign in, and signout
- inject multer middleware for uploading file in server and add a file object to req object
- after upload file upload it to cloudinary and remove from server by filesystem handling(fs.unlinksync())
- fetch data using axios and show to the client side
- by clicking blog read blog
- save accesstoken in cookies and delete it upon logout

![Screenshot (51)](https://github.com/suvendu021/bloggingApp/assets/102411414/d46fc154-5c8e-48f9-a112-a0137cdd6809)
![Screenshot (52)](https://github.com/suvendu021/bloggingApp/assets/102411414/bf577ac1-9074-4837-9c61-614b5b2918b7)
![Screenshot (53)](https://github.com/suvendu021/bloggingApp/assets/102411414/8ef99547-5c82-4a22-8e56-639014858708)
![Screenshot (54)](https://github.com/suvendu021/bloggingApp/assets/102411414/3dc95158-937a-4a74-86cd-debc0b0df7fa)
![Screenshot (55)](https://github.com/suvendu021/bloggingApp/assets/102411414/9a308f08-d2e0-4a9f-9f05-7710dec35e56)
![Screenshot (56)](https://github.com/suvendu021/bloggingApp/assets/102411414/8cb56a0c-6f4b-442f-8010-ee1959d99d76)
![Screenshot (57)](https://github.com/suvendu021/bloggingApp/assets/102411414/a698fd52-c144-4820-a39c-bced0c38bd46)
![Screenshot (58)](https://github.com/suvendu021/bloggingApp/assets/102411414/2b9f8507-2b72-4e42-a3aa-03680743e0d2)







