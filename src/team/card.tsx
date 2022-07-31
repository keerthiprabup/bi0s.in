import Link from "next/link";
import Image from "next/image";
import React from "react";

const MemberCard = ({ name, surname, username, team = null, affiliation = null, linkedin = null, twitter = null, email = null }) => (
    <div className="w-100 md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
        {username && <div className="text-2xl">@{username}</div>}
        <div className="mb-1 uppercase">
            <span className="font-semibold mr-1">{name}</span>
            {surname}
        </div>
        {team && <div className="text-sm">{team}</div>}
        {affiliation && <div className="text-sm">{affiliation}</div>}
        <div className="flex items-center mt-3">
            {twitter && (
                <Link href={`https://www.twitter.com/${twitter}`} passHref>
                    <a className="mr-2">
                        <Image alt="Twitter Profile" src="/icons/twitter.svg" width={24} height={24} />
                    </a>
                </Link>
            )}
            {linkedin && (
                <Link href={`https://www.linkedin.com/in/${linkedin}`} passHref>
                    <a className="mr-2">
                        <Image alt="LinkedIn Profile" src="/icons/linkedin.svg" width={24} height={24} />
                    </a>
                </Link>
            )}
            {email && (
                <Link href={`mailto:${email}`} passHref>
                    <a>
                        <Image alt="Email Address" src="/icons/mail.svg" width={24} height={24} />
                    </a>
                </Link>
            )}
        </div>
    </div>
);

export default MemberCard;