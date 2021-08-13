feature 'Enter names' do
  scenario 'enter names & submit' do
    sign_in_and_play
    expect(page).to have_content 'ashley vs. sharon'
  end
end