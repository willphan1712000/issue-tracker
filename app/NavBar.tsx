'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa6";
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';

const NavBar = () => {
    
  return (
    <nav className='border-b mb-5 px-5 py-3'>
        <Container>
            <Flex justify='between'>
                <Flex align="center" gap="3">
                    <Link href="/"><FaBug /></Link>
                    <NavLink />
                </Flex>
                <AuthStatus />
            </Flex>
        </Container>
    </nav>
  )
}

const NavLink = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'Dashboard', href: "/"},
        {label: 'Issues', href: "/issues"},
    ]
    return (
        <ul className='flex space-x-6'>
            {links.map(link =>
                <li key={link.href}>
                    <Link className={classnames({
                        'nav-link': true,
                        '!text-zinc-900': link.href === currentPath,
                    })} href={link.href}>{link.label}</Link>
                </li>
            )}
        </ul>
    )
}

const AuthStatus = () => {
    const {status, data: session} = useSession()
    return (
        <Box>
            {status === 'authenticated' && (
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Avatar src={session.user!.image!} fallback={'?'} size="2" radius='full' className='cursor-pointer' referrerPolicy='no-referrer' />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Label>
                            <Text size="2">
                                {session.user!.email}
                            </Text>
                        </DropdownMenu.Label>
                        <DropdownMenu.Item>
                            <Link href='/api/auth/signout'>Sign out</Link>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            )}
            {status === 'unauthenticated' && <Link href='/api/auth/signin' className='nav-link'>Sign in</Link>}
        </Box>
    )
}

export default NavBar
