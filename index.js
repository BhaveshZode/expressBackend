require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()

const port = 4000

const githubData = {
  "login": "BhaveshZode",
  "id": 172618872,
  "node_id": "U_kgDOCkn0eA",
  "avatar_url": "https://avatars.githubusercontent.com/u/172618872?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/BhaveshZode",
  "html_url": "https://github.com/BhaveshZode",
  "followers_url": "https://api.github.com/users/BhaveshZode/followers",
  "following_url": "https://api.github.com/users/BhaveshZode/following{/other_user}",
  "gists_url": "https://api.github.com/users/BhaveshZode/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/BhaveshZode/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/BhaveshZode/subscriptions",
  "organizations_url": "https://api.github.com/users/BhaveshZode/orgs",
  "repos_url": "https://api.github.com/users/BhaveshZode/repos",
  "events_url": "https://api.github.com/users/BhaveshZode/events{/privacy}",
  "received_events_url": "https://api.github.com/users/BhaveshZode/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-06-13T15:07:29Z",
  "updated_at": "2025-10-30T09:59:54Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send('bhaveshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})