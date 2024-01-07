import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                {/* o dialog root precisa estar em volta do botão e do modal */}
                <Dialog.Root>
                    {/* as Child vai mudar para que o dialog.trigger n crie um novo botão e sim aproveite o existente */}
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}