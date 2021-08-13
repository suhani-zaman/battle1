feature "Attack player" do
    scenario "attack player & get confirmation" do
        sign_in_and_play
        click_button "Attack!"
        expect(page).to have_content "ashley attacked sharon"
    end
end