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
