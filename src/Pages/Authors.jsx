import React, { useState } from "react"
import avatar1 from "../Assets/avatar1.png"
import avatar2 from "../Assets/avatar2.png"
import avatar3 from "../Assets/avatar3.png"
import avatar4 from "../Assets/avatar4.png"
import avatar5 from "../Assets/avatar5.png"
import { Link } from "react-router-dom"

const authorsData = [
  { id: 1, avatar: avatar1, name: "Albert Bin", posts: 3 },
  { id: 2, avatar: avatar2, name: "Leo", posts: 5 },
  { id: 3, avatar: avatar3, name: "Christopher", posts: 0 },
  { id: 4, avatar: avatar4, name: "Michael", posts: 2 },
  { id: 5, avatar: avatar5, name: "Robiinson", posts: 1 },
]

function Authors() {
  const [authors, setAuthors] = useState(authorsData)

  return (
    <>
      <section className="authors">
        {authors.length > 0 ? (
          <div className="container authors__container">
            {authors.map(({ id, avatar, name, posts }) => {
              return (
                <Link key={id} to={`/posts/users/${id}`} className="author">
                  <div className="author__avatar">
                    <img src={avatar} alt={`Image of ${name}`} />
                  </div>

                  <div className="author__info">
                    <h4>{name}</h4>
                    <p>Posts uploaded: {posts}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <h2 className="center">No users or authors found!!!</h2>
        )}
      </section>
    </>
  )
}

export default Authors
