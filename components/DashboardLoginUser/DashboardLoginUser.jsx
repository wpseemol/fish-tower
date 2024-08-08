import { auth } from '@/auth/auth';
import { ADMIN, CREATOR } from '@/constant-value';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardLoginUser() {
    const session = await auth();

    let userTypeCake;
    if (session?.user?.role === ADMIN) {
        userTypeCake = 'Admin';
    } else if (session?.user?.role === CREATOR) {
        userTypeCake = 'Content Creator';
    } else {
        redirect('/account');
    }

    return (
        <section>
            <div className="flex items-center gap-2">
                <div
                    className="w-8 h-8 border bg-primaryColor/30
                 rounded-full flex items-center justify-center">
                    <Link href="/dashboard">
                        <span className="text-xl">
                            {loginUser?.fullName[0]}
                        </span>
                    </Link>
                </div>
                <div>
                    <h2 className="text-sm">{loginUser?.fullName}</h2>
                    <p className="text-xs">{userTypeCake}</p>
                </div>
            </div>
        </section>
    );
}
