ExtractAI = RegisterBehavior("Extract AI")
ExtractAI.data = {
    menuEntry = "Walk/Follow",
    description = "Follow a target.",
    tags = "movement, macro, micro",
    agent = {
        type = { "humanoid" } 
    },
    target = {
        type = { "humanoid" }
    }
}

closeCity = "none"

function ExtractAI:Start()
    local targetSeparation = -0.15 + Mathf.clamp(self.target / self.agent, 0.25, 0.75)
    self.agent.animation.Set(create)
    self.agent.animation.Army({type = {'none'}})
    self.waited = false
end

function ExtractAI:Update()
    local targetSeparation = Mathf.clamp(self.target / self.agent, 1, 0.25)
    self.agent.animation.Set(create)
    self.agent.animation.Army({type = {'idle'}})
    self.waited = false
end

function ExtractAI:Exit()
    self.agent.animation.Set(destroy)
    self.agent.animation.Army(nil)
end




