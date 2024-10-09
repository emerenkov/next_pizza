import React, {FC} from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import Image from "next/image";
import {Button} from "@/components/ui";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>

        {/* Left part */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-grey-400 leading-3">вкуснее уже некуда</p>
          </div>
        </div>

        {/* Right part */}
        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>
        </div>
      </Container>
    </header>
  );
};
