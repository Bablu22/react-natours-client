import React from 'react'

function UserCard({ user }) {
    return (
        <div className="flex flex-col items-center p-4 border rounded-xl dark:border-gray-700 sm:p-6">
            <img
                className="object-cover w-full aspect-square rounded-xl"
                src={user.photo}
                alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                {user.name}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-300">
                Eamil: {user.email}
            </p>
        </div>
    )
}

export default UserCard

