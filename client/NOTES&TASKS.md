# Tasks

## Components

### Component Creation

#### Common Components

<aside class="note">
    <p>Common components are reusable components that can be used across different pages and sections of the application.</p>
</aside>

<ul class="task-list">
    <li><input type="checkbox" checked >Create <strong>input</strong> components</li>
    <li><input type="checkbox" checked >Create <strong>button</strong> components</li>
    <li><input type="checkbox" >Create <strong>card</strong> components</li>
    <li><input type="checkbox" >Create <strong>modal</strong> components</li>
    <li><input type="checkbox" >Create <strong>spinner</strong> components</li>
</ul>

#### Layout Components

<aside class="note">
    <p>Layout components are used to structure the layout of the application, such as headers, footers, and sidebars.</p>
</aside>

<ul class="task-list">
    <li><input type="checkbox" checked >Create <strong>header</strong> components</li>
    <li><input type="checkbox" checked >Create <strong>footer</strong> components</li>
    <li><input type="checkbox" >Create <strong>sidebar</strong> components</li>
</ul>

### Component Improvements

<ul class="task-list">
    <li><input type="checkbox" >Review properties for <a href="./src/components/common/InputField.tsx">InputField</a></li>
    <li><input type="checkbox" >Add condition around label for <a href="./src/components/common/InputField.tsx">InputField</a></li>
    <li><input type="checkbox" >Review properties for <a href="./src/components/common/CheckboxField.tsx">CheckboxField</a></li>
    <li><input type="checkbox" >Review properties for <a href="./src/components/common/Button.tsx">Button</a></li>
</ul>

## Pages

### Page Creation

#### Static Pages

<aside class="note">
    <p>Static pages are those that do not require any user interaction or dynamic content. They are typically used for informational purposes.</p>
</aside>

<ul class="task-list">
    <li><input type="checkbox" checked >Create <strong>home</strong> page</li>
    <li><input type="checkbox" >Create <strong>about</strong> page</li>
    <li><input type="checkbox" >Create <strong>contact</strong> page</li>
    <li><input type="checkbox" >Create <strong>404</strong> page</li>
</ul>

#### Dynamic Pages

<aside class="note">
    <p>Dynamic pages are those that require user interaction or display dynamic content based on user input or data from a database.</p>
</aside>

##### Authentication Pages

<aside class="note">
    <p>Authentication pages are used for user login, registration, password recovery, and other authentication-related tasks.</p>
</aside>

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>forgot password</strong> page</li>
    <li><input type="checkbox" >Create <strong>reset password</strong> page</li>
    <li><input type="checkbox" >Create <strong>email verification</strong> page</li>
    <li><input type="checkbox" >Create <strong>change password</strong> page</li>
    <li><input type="checkbox" >Create <strong>logout</strong> page</li>
</ul>

###### Student Authentication

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>register</strong> page for <strong>students</strong></li>
    <li><input type="checkbox" checked >Create <strong>login</strong> page for <strong>students</strong></li>
</ul>

###### Tutor Authentication

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>register</strong> page for <strong>tutors</strong></li>
    <li><input type="checkbox" >Create <strong>login</strong> page for <strong>tutors</strong></li>
</ul>

##### User Pages

<aside class="note">
    <p>User pages are specific to the user and may include profile, settings, and dashboard pages.</p>
</aside>

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>settings</strong> page</li>
    <li><input type="checkbox" >Create <strong>chat</strong> page</li>
</ul>

###### Student Pages

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>student profile</strong> page</li>
    <li><input type="checkbox" >Create <strong>student dashboard</strong> page</li>
</ul>

###### Tutor Pages

<ul class="task-list">
    <li><input type="checkbox" >Create <strong>tutor profile</strong> page</li>
    <li><input type="checkbox" >Create <strong>tutor dashboard</strong> page</li>
</ul>

### Page Improvements

<ul class="task-list">
    <li><input type="checkbox" >Finish editing <a href="./src/pages/Home/index.tsx">Homepage</a></li>
    <li><input type="checkbox" >Separate <a href="./src/pages/StudentSignup/SignupFormSet1.tsx">SignupFormSet1</a> into more files</li>
    <li><input type="checkbox" >Add a spinner tp <a href="./src/pages/StudentSignup/SignupFormSet1.tsx">SignupFormSet1</a></li>
</ul>

## Style

### CSS File Creation

<ul class="task-list">
    <li><input type="checkbox" checked >Create <a href="./src/pages/StudentLogin/index.tsx">login</a> CSS files</li>
    <li><input type="checkbox" checked >Create <a href="./src/pages/StudentSignup/index.tsx">register</a> CSS files</li>
    <li><input type="checkbox" >Create <strong>forgot password</strong> page style</li>
    <li><input type="checkbox" >Create <strong>reset password</strong> page style</li>
    <li><input type="checkbox" >Create <strong>email verification</strong> page style</li>
    <li><input type="checkbox" >Create <strong>change password</strong> page style</li>
</ul>

### Style Improvements

<ul class="task-list">
    <li><input type="checkbox" >Merge <a href="./src/styles/StudentLogin/LoginImg.css">LoginImg</a> and <a href="./src/styles/StudentSignup/SignupImg.css">SignupImg</a> CSS files</li>
</ul>

<style>
    .task-list {
        list-style-type: none;
        padding: 0;
    }
</style>
