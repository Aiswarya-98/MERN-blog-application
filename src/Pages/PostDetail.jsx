import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail1 from '../Assets/thumbnail1.jpg'

function PostDetail() {
  return (
  <>
  <section className='post-detail'>
    <div className="container post-detail__container">
      <div className="post-detail__header">
        <PostAuthor/>
        <div className="post-detail__buttons">
          <Link to={'/posts/dferrg/edit'} className='btn sm primary'>Edit</Link>
          <Link to={'/posts/dferrg/delete'} className='btn sm danger'>Delete</Link>

        </div>
      </div>

      <h1>This is the post title</h1>

      <div className="post-detail__thumbnail">
        <img src={thumbnail1} alt="thumbnail" />
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit iste architecto. Sapiente et officia saepe sed est placeat. Dolor deserunt tempore atque? Ducimus praesentium aperiam fuga, ipsam expedita voluptates?
      Nam magni quo quasi, ea maxime blanditiis nisi accusantium molestiae, ullam delectus perspiciatis praesentium animi enim autem placeat quas laborum neque atque et veniam nihil, modi aperiam explicabo ad? Eius?
      Beatae eius, rem dolore autem voluptates aliquam saepe? Natus labore obcaecati nisi maxime harum debitis sed. Sed pariatur rerum quas natus, aut necessitatibus praesentium asperiores error quisquam excepturi dolorum repudiandae.
      Quas saepe at tempore temporibus obcaecati accusantium et nihil consequatur libero nulla id dolores nisi reiciendis maxime molestiae molestias eum neque laboriosam nesciunt, minima pariatur ipsum! Iusto cumque magni ad!
      Incidunt sint corrupti magnam debitis nam inventore, recusandae, placeat maxime unde fugiat facilis, quasi labore voluptatem quia itaque aut sequi voluptas laborum aperiam aliquam ab quis nobis? Provident, ducimus iusto!
      Quo magni maiores nostrum quidem sapiente dolorum consectetur rem cupiditate odit error iusto distinctio itaque, amet id nam aliquam. Quas totam fuga quod aperiam. Explicabo quos dolorem consequatur voluptates quod!
      Quas minus maxime modi ad non nemo deserunt in odio corporis saepe rem inventore, aut deleniti. Nesciunt odit cupiditate molestias voluptatem iure ab, quasi, suscipit quo facilis recusandae, praesentium veniam.
      Voluptatem natus libero quo aspernatur, a dignissimos nam ipsum necessitatibus modi ratione officiis ipsa fuga tenetur expedita sed perspiciatis sequi in beatae veniam qui voluptates eos velit quibusdam magni? Fuga.
      Maiores commodi quo voluptatem qui fuga quam consectetur. Reiciendis quasi aliquam necessitatibus et vitae amet dicta deserunt. Deserunt a nemo voluptatibus. Officiis sapiente dignissimos similique quaerat adipisci laudantium accusamus vel.
      Rerum aliquam harum odio exercitationem atque, alias tenetur asperiores incidunt nihil quas porro deserunt tempora quaerat voluptatem, nemo natus. Nisi nihil porro asperiores sunt modi corrupti consequatur dolorem quisquam laborum?
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit iste architecto. Sapiente et officia saepe sed est placeat. Dolor deserunt tempore atque? Ducimus praesentium aperiam fuga, ipsam expedita voluptates?
      Nam magni quo quasi, ea maxime blanditiis nisi accusantium molestiae, ullam delectus perspiciatis praesentium animi enim autem placeat quas laborum neque atque et veniam nihil, modi aperiam explicabo ad? Eius?
      Beatae eius, rem dolore autem voluptates aliquam saepe? Natus labore obcaecati nisi maxime harum debitis sed. Sed pariatur rerum quas natus, aut necessitatibus praesentium asperiores error quisquam excepturi dolorum repudiandae.
      Quas saepe at tempore temporibus obcaecati accusantium et nihil consequatur libero nulla id dolores nisi reiciendis maxime molestiae molestias eum neque laboriosam nesciunt, minima pariatur ipsum! Iusto cumque magni ad!
      Incidunt sint corrupti magnam debitis nam inventore, recusandae, placeat maxime unde fugiat facilis, quasi labore voluptatem quia itaque aut sequi voluptas laborum aperiam aliquam ab quis nobis? Provident, ducimus iusto!
      Quo magni maiores nostrum quidem sapiente dolorum consectetur rem cupiditate odit error iusto distinctio itaque, amet id nam aliquam. Quas totam fuga quod aperiam. Explicabo quos dolorem consequatur voluptates quod!
      Quas minus maxime modi ad non nemo deserunt in odio corporis saepe rem inventore, aut deleniti. Nesciunt odit cupiditate molestias voluptatem iure ab, quasi, suscipit quo facilis recusandae, praesentium veniam.
      Voluptatem natus libero quo aspernatur, a dignissimos nam ipsum necessitatibus modi ratione officiis ipsa fuga tenetur expedita sed perspiciatis sequi in beatae veniam qui voluptates eos velit quibusdam magni? Fuga.
      Maiores commodi quo voluptatem qui fuga quam consectetur. Reiciendis quasi aliquam necessitatibus et vitae amet dicta deserunt. Deserunt a nemo voluptatibus. Officiis sapiente dignissimos similique quaerat adipisci laudantium accusamus vel.
      Rerum aliquam harum odio exercitationem atque, alias tenetur asperiores incidunt nihil quas porro deserunt tempora quaerat voluptatem, nemo natus. Nisi nihil porro asperiores sunt modi corrupti consequatur dolorem quisquam laborum?
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit iste architecto. Sapiente et officia saepe sed est placeat. Dolor deserunt tempore atque? Ducimus praesentium aperiam fuga, ipsam expedita voluptates?
      Nam magni quo quasi, ea maxime blanditiis nisi accusantium molestiae, ullam delectus perspiciatis praesentium animi enim autem placeat quas laborum neque atque et veniam nihil, modi aperiam explicabo ad? Eius?
      Beatae eius, rem dolore autem voluptates aliquam saepe? Natus labore obcaecati nisi maxime harum debitis sed. Sed pariatur rerum quas natus, aut necessitatibus praesentium asperiores error quisquam excepturi dolorum repudiandae.
      Quas saepe at tempore temporibus obcaecati accusantium et nihil consequatur libero nulla id dolores nisi reiciendis maxime molestiae molestias eum neque laboriosam nesciunt, minima pariatur ipsum! Iusto cumque magni ad!
      Incidunt sint corrupti magnam debitis nam inventore, recusandae, placeat maxime unde fugiat facilis, quasi labore voluptatem quia itaque aut sequi voluptas laborum aperiam aliquam ab quis nobis? Provident, ducimus iusto!
      Quo magni maiores nostrum quidem sapiente dolorum consectetur rem cupiditate odit error iusto distinctio itaque, amet id nam aliquam. Quas totam fuga quod aperiam. Explicabo quos dolorem consequatur voluptates quod!
      Quas minus maxime modi ad non nemo deserunt in odio corporis saepe rem inventore, aut deleniti. Nesciunt odit cupiditate molestias voluptatem iure ab, quasi, suscipit quo facilis recusandae, praesentium veniam.
      Voluptatem natus libero quo aspernatur, a dignissimos nam ipsum necessitatibus modi ratione officiis ipsa fuga tenetur expedita sed perspiciatis sequi in beatae veniam qui voluptates eos velit quibusdam magni? Fuga.
      Maiores commodi quo voluptatem qui fuga quam consectetur. Reiciendis quasi aliquam necessitatibus et vitae amet dicta deserunt. Deserunt a nemo voluptatibus. Officiis sapiente dignissimos similique quaerat adipisci laudantium accusamus vel.
      Rerum aliquam harum odio exercitationem atque, alias tenetur asperiores incidunt nihil quas porro deserunt tempora quaerat voluptatem, nemo natus. Nisi nihil porro asperiores sunt modi corrupti consequatur dolorem quisquam laborum?
      </p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque assumenda perspiciatis. Soluta, non. Ipsa beatae eveniet vel. A mollitia odio deserunt quod nesciunt vero in nobis cum tempora libero.
      Ipsam omnis iste nihil enim, veritatis quam quaerat eum aperiam aspernatur vitae error quibusdam, ab asperiores deserunt neque dicta, quia quo saepe! Enim sapiente necessitatibus velit nam temporibus exercitationem non.
      Perferendis fugiat natus nemo, eum dolorem qui! Reprehenderit accusantium sed placeat accusamus praesentium commodi cupiditate repellendus soluta libero assumenda voluptatum amet tempora autem adipisci animi voluptate, ipsum vel porro laboriosam?
      Ad nulla vero ipsa pariatur id debitis, maiores dolores, dolore sint doloribus odio earum perferendis aut veniam provident exercitationem corporis cupiditate eveniet libero. Hic eos eligendi modi voluptatibus quia porro.</p>

    </div>
  </section>
  </>
  )
}

export default PostDetail
