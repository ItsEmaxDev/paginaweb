# TODO List for Mi Salle+ News Integration

## 1. Supabase Client Setup
- [x] Connect Supabase to frontend using .env variables (already done)
- [x] Add helper functions to supabaseClient.js: getNews(), addNews(), deleteNews()

## 2. Home Page Updates
- [x] Modify Home.jsx to load and display news dynamically using getNews()

## 3. Admin Panel Creation
- [x] Create Admin.jsx page with form to add news and list with delete buttons
- [x] Implement basic password protection with prompt and localStorage
- [x] Use Tailwind for clean, minimal design consistent with site theme
- [x] Add responsive design and loading indicators

## 4. Routing Updates
- [x] Update App.jsx to use React Router and include /admin route

## 5. Error Handling
- [x] Ensure all API calls log errors to console

## 6. Deployment
- [ ] Commit and push changes to GitHub for Vercel redeployment
