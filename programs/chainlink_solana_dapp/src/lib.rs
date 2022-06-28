use anchor_lang::prelude::*;
use chainlink_solana as chainlink;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod chainlink_solana_dapp {
    use super::*;

    pub fn execute(ctx: Context<Execute>) -> ProgramResult {
        let round = chainlink::latest_round_data(ctx.accounts.chainlink_program.to_account_info(),
        ctx.accounts.chainlink_feed.to_account_info());
        let result_account = &mut ctx.accounts.result_account;
        result_account.value = round.answer;
        Ok(());
    }
    
}

#[derive(Accounts)]
pub struct Execute<'info> {
    #[account(init, payer=user, space=100)]
    let result_account: Account<'info, ResultAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub chainlink_program: AccountInfo<'info>,

}

#[acount]
pub struct ResultAccount{
    pub value: i128;
}