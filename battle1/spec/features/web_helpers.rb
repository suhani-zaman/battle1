def sign_in_and_play
    visit('/')
    fill_in :player_1, with:'ashley'
    fill_in :player_2, with:'sharon'
    click_button 'Submit'
end
  