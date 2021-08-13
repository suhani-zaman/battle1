feature "View hit points" do
  scenario "enter player and view hitpoint of the player" do
    sign_in_and_play
    expect(page).to have_content "ashley HP:50"
    expect(page).to have_content "sharon HP:50"
  end
end