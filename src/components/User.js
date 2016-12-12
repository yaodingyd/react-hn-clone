import React from 'react'

const User = ({user}) => {
  return (
    <div className="news-list">
      <table>
        <tbody>
          <tr>
            <td>user:</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>created:</td>
            <td>{user.created}</td>
          </tr>
          <tr>
            <td>karma:</td>
            <td>{user.karma}</td>
          </tr>
          <tr>
            <td>about:</td>
            <td dangerouslySetInnerHTML={{__html:user.about}}></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User