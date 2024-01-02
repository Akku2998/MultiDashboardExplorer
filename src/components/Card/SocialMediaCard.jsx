import { useNavigate } from "react-router-dom";
export function SocialMediaCard({socialCardData,mode}){
  let navigate = useNavigate();

    const MultiViewCard = <div className="bg-white p-6 rounded-md shadow-md max-w-md"> 
      <img src={socialCardData?.coverPhoto} alt="Cover Photo" className="w-full h-32 object-cover mb-4 rounded-md" />

      <div className="flex items-center mb-4">
        <img src={socialCardData?.profilePic} alt="Profile" className="w-16 h-16 object-cover rounded-full mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-blue-600">{socialCardData?.fullName}</h2>
          <p className="text-gray-500 font-bold">@{socialCardData?.username}</p>
        </div>
      </div>

      <p className="text-gray-900 mb-4">{socialCardData?.bio}</p>
      <p className="text-green-500 mb-4 font-bold">{socialCardData?.statusMessage}</p>

      <div className="flex justify-between text-gray-500 mb-4">
        <div>
        <p className="font-bold">Followers: <span className="text-blue-600"> {socialCardData?.followersCount}</span></p>
        <p className="font-bold">Following: <span className="text-blue-600">{socialCardData?.followingCount}</span></p>
        </div>
        <p className="font-bold">Posts: <span className="text-blue-600">{socialCardData?.postsCount}</span></p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
        {socialCardData?.gender}, {socialCardData?.birthDate} ({socialCardData?.pronouns})
        </p>
        <p className="text-gray-700">{socialCardData?.location}</p>
        <p className="text-gray-700">Joined: {socialCardData?.joinedDate}</p>
        <p className={`font-bold text-${socialCardData?.verifiedStatus ? 'green' : 'red'}-500`}>
          {socialCardData?.verifiedStatus ? 'Verified' : 'Not Verified'}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          Hobbies: {socialCardData?.hobbies?.map((hobby, index) => (
            <span key={index} className="inline-block bg-blue-200 text-blue-800 rounded-full px-2 py-1 mr-2">
              {hobby}
            </span>
          ))}
        </p>
        </div>
        <div className="mb-4">
        <p className="text-gray-700">
          Interests: {socialCardData?.interests?.map((interest, index) => (
            <span key={index} className="inline-block bg-purple-200 text-purple-800 rounded-full px-2 py-1 mr-2">
              {interest}
            </span>
          ))}
        </p>
      </div>

  
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Education:  <span className="text-gray-500"> {socialCardData?.education}</span></p>
        <p className="text-gray-700 font-bold">Work: <span className="text-gray-500"> {socialCardData?.work}</span></p>
      </div>
     
      <div className="mb-4">
        <p className="text-gray-700 font-bold">Email: <span className="text-gray-500">{socialCardData?.privacySettings?.showEmail ? socialCardData?.email : 'Private'}</span></p>
        <p className="text-gray-700 font-bold">Phone:  <span className="text-gray-500"> {socialCardData?.contactInfo?.phone}</span></p>
      </div>

      {socialCardData?.customFields?.map((field, index) => (
        <p key={index} className="text-gray-700">
          {field.fieldName}: {field.fieldValue}
        </p>
      ))}
      <div>
        <button onClick={()=> navigate(`/socialMediaProfiles/${socialCardData.userId}`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        View Details
      </button>
      </div>
    </div>



    const SingleViewCard = <div className="bg-white p-6 rounded-md shadow-md max-w-full"> 
    <img src={socialCardData?.coverPhoto} alt="Cover Photo" className="w-full h-32 object-cover mb-4 rounded-md" />

    <div className="flex items-center mb-4">
      <img src={socialCardData?.profilePic} alt="Profile" className="w-16 h-16 object-cover rounded-full mr-4" />
      <div>
        <h2 className="text-2xl font-bold text-blue-600">{socialCardData?.fullName}</h2>
        <p className="text-gray-500 font-bold">@{socialCardData?.username}</p>
      </div>
    </div>

    <p className="text-gray-900 mb-4">{socialCardData?.bio}</p>
    <p className="text-green-500 mb-4 font-bold">{socialCardData?.statusMessage}</p>

    <div className="flex justify-between text-gray-500 mb-4">
      <div>
      <p className="font-bold">Followers: <span className="text-blue-600"> {socialCardData?.followersCount}</span></p>
      <p className="font-bold">Following: <span className="text-blue-600">{socialCardData?.followingCount}</span></p>
      </div>
      <p className="font-bold">Posts: <span className="text-blue-600">{socialCardData?.postsCount}</span></p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700">
      {socialCardData?.gender}, {socialCardData?.birthDate} ({socialCardData?.pronouns})
      </p>
      <p className="text-gray-700">{socialCardData?.location}</p>
      <p className="text-gray-700">Joined: {socialCardData?.joinedDate}</p>
      <p className={`font-bold text-${socialCardData?.verifiedStatus ? 'green' : 'red'}-500`}>
        {socialCardData?.verifiedStatus ? 'Verified' : 'Not Verified'}
      </p>
    </div>
    <div className="mb-4">
      <p className="text-gray-700">
        Hobbies: {socialCardData?.hobbies?.map((hobby, index) => (
          <span key={index} className="inline-block bg-blue-200 text-blue-800 rounded-full px-2 py-1 mr-2">
            {hobby}
          </span>
        ))}
      </p>
      </div>
      <div className="mb-4">
      <p className="text-gray-700">
        Interests: {socialCardData?.interests?.map((interest, index) => (
          <span key={index} className="inline-block bg-purple-200 text-purple-800 rounded-full px-2 py-1 mr-2">
            {interest}
          </span>
        ))}
      </p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 font-bold">Education:  <span className="text-gray-500"> {socialCardData?.education}</span></p>
      <p className="text-gray-700 font-bold">Work: <span className="text-gray-500"> {socialCardData?.work}</span></p>
    </div>
   

    <div className="mb-4">
      <p className="text-gray-700 font-bold">Email: <span className="text-gray-500">{socialCardData?.privacySettings?.showEmail ? socialCardData?.email : 'Private'}</span></p>
      <p className="text-gray-700 font-bold">Phone:  <span className="text-gray-500"> {socialCardData?.contactInfo?.phone}</span></p>
    </div>

    {socialCardData?.customFields?.map((field, index) => (
      <p key={index} className="text-gray-700">
        {field.fieldName}: {field.fieldValue}
      </p>
    ))}
    </div>

   return  mode === 'multiple' ? MultiViewCard : SingleViewCard;
}