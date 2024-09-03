class After {
    action: () => void = () => { }

    constructor(action: (() => void) | null = null) {
        if (action === null) {
            action = () => { }
        }

        this.action = action
    }

    before_then(duration: number, action: () => void) {
        return new After(() => {
            timer.after(duration, () => {
                action()
                this.action()
            })
        })
    }
}

function time_sequence(seq: any[][]) {
    let sequencer = new After()

    for (let i = seq.length - 1; i >= 0; --i) {
        sequencer = sequencer.before_then(
            seq[i][0], seq[i][1],
        )
    }

    return sequencer.action()
}
